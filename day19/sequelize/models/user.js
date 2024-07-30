// Sequelize 라이브러리 import
const Sequelize = require("sequelize");

// User 모델 정의
class User extends Sequelize.Model {
  // 모델 초기화 메서드
  static initiate(sequelize) {
    // User 모델의 필드 정의
    User.init(
      {
        // 이름 필드: 문자열, NULL 불가
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        // 나이 필드: 정수, NULL 불가
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        // 결혼 여부 필드: 불리언, NULL 불가
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        // 코멘트 필드: 텍스트, NULL 허용
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        // 생성 시간 필드: 날짜, NULL 불가, 기본값은 현재 시간
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        // 모델 옵션 설정
        sequelize, // Sequelize 인스턴스
        timestamps: false, // 자동 타임스탬프 비활성화
        underscored: false, // 스네이크 케이스 사용 안 함
        modelName: "User", // 모델 이름
        tableName: "members", // 테이블 이름
        paranoid: false, // 소프트 삭제 비활성화
        charset: "utf8", // 문자 인코딩
        collate: "utf8_general_ci", // 문자 정렬 방식
      }
    );
  }

  // 연관 관계 설정 메서드 (현재 비어 있음)
  static associate(db) {}
}

// 모듈로 User 모델 내보내기
module.exports = User;
