// Sequelize 라이브러리를 불러옵니다.
const Sequelize = require("sequelize");

// Comment 모델을 정의합니다.
class Comment extends Sequelize.Model {
  // 모델 초기화 메서드
  static initiate(sequelize) {
    Comment.init(
      {
        // 댓글 내용을 저장하는 필드
        comment: {
          type: Sequelize.STRING(100), // 최대 100자의 문자열
          allowNull: false, // null 값 허용 안 함
        },
        // 댓글 작성 시간을 저장하는 필드
        created_at: {
          type: Sequelize.DATE, // 날짜 타입
          allowNull: false, // null 값 허용 안 함
          defaultValue: Sequelize.NOW, // 기본값은 현재 시간
        },
      },
      {
        // 모델 옵션 설정
        sequelize, // 시퀄라이즈 인스턴스 (도서관과 소통할수 있는 전화기)
        timestamps: false, // 타임스탬프 자동 생성 비활성화
        modelName: "Comment", // 모델 이름
        tableName: "comments", // 실제 데이터베이스 테이블 이름
        paranoid: false, // 소프트 삭제 기능 비활성화
        charset: "utf8mb4", // 문자 인코딩 설정 (이모지 지원)
        collate: "utf8mb4_general_ci", // 데이터 정렬 방식
      }
    );
  }

  // 다른 모델과의 관계 설정 메서드
  static associate(db) {
    // Comment 모델이 User 모델에 속함을 정의
    // 'commenter' 필드가 User 모델의 'id'를 참조
    db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" }); //한 댓글은 하나의 사용자에 의해 작성된다는 의미
  }
}

// Comment 모델을 외부로 내보냅니다.
module.exports = Comment;
