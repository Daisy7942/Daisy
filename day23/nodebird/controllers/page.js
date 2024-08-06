// 필요한 모델들을 가져옵니다. 이 모델들은 데이터베이스와 상호작용하는데 사용됩니다.
const { User, Post, Hashtag } = require("../models");

// 프로필 페이지를 보여주는 함수입니다.
exports.renderProfile = (req, res) => {
  // 'profile' 뷰를 렌더링하고, 페이지 제목을 설정합니다.
  res.render("profile", { title: "내 정보 - NodeBird" });
};

// 회원가입 페이지를 보여주는 함수입니다.
exports.renderJoin = (req, res) => {
  // 'join' 뷰를 렌더링하고, 페이지 제목을 설정합니다.
  res.render("join", { title: "회원가입 - NodeBird" });
};

// 메인 페이지를 보여주는 함수입니다. 비동기 함수로 정의되었습니다.
exports.renderMain = async (req, res, next) => {
  // 환경 변수에서 페이지 크기와 페이지 패딩 크기를 가져옵니다.
  let pageSize = Number(process.env.PAGE_SIZE);
  let pagePaddingSize = Number(process.env.PAGE_PADDING_SIZE);

  // 현재 페이지 번호를 설정합니다. URL 쿼리에서 가져오며, 없으면 0으로 설정합니다.
  let currentPage = 0;
  if (req.query.currentPage) currentPage = Number(req.query.currentPage);

  // 전체 게시물 수를 저장할 변수를 초기화합니다.
  let totalSize = 0;

  try {
    // 모든 게시물을 가져와 전체 개수를 계산합니다.
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"], // 사용자의 id와 닉네임만 가져옵니다.
      },
    });

    totalSize = posts.length;
  } catch (err) {
    console.error(err);
    return next(err); // 오류 발생 시 다음 미들웨어로 오류를 전달합니다.
  }

  // 현재 페이지에 해당하는 게시물의 시작 위치(오프셋)를 계산합니다.
  let offset = (currentPage - 1) * pageSize;
  if (offset < 0) {
    offset = 0; // 오프셋이 음수가 되지 않도록 합니다.
  }

  try {
    // 현재 페이지에 해당하는 게시물들을 가져옵니다.
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      offset: Number(offset) || 0, // 시작 위치
      limit: pageSize, // 가져올 게시물 수
      order: [["createdAt", "DESC"]], // 생성일 기준 내림차순 정렬
    });

    // 'main' 뷰를 렌더링하고, 필요한 데이터를 전달합니다.
    res.render("main", {
      title: "NodeBird",
      twits: posts, // 게시물 목록
      totalSize: totalSize, // 전체 게시물 수
      currentPage: currentPage, // 현재 페이지 번호
      pageSize: pageSize, // 페이지 당 게시물 수
      pagePaddingSize: pagePaddingSize, // 페이지 네비게이션의 패딩 크기
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 해시태그 검색 결과를 보여주는 함수입니다.
exports.renderHashtag = async (req, res, next) => {
  // URL 쿼리에서 해시태그를 가져옵니다.
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/"); // 해시태그가 없으면 메인 페이지로 리다이렉트합니다.
  }
  try {
    // 해당 해시태그를 데이터베이스에서 찾습니다.
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      // 해시태그와 연관된 게시물들을 가져옵니다.
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    // 'main' 뷰를 렌더링하고, 검색 결과를 전달합니다.
    return res.render("main", {
      title: `${query} | NodeBird`,
      twits: posts, // 검색된 게시물 목록
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
