//user dao 객체
function UserDao() {
	// 회원가입 메서드
	this.userInsert = function(user) {

		try {

			$.ajax({
				url : '/', // 홈페이지 불러올 주소
				async : false, // false: 동기, true: 비동기
				type : 'post', // 요청방식 get or post
				data : {
					userId : user.uesrId,
					userPw : user.userPw,
					userNickname : user.userNickname,
					userPhoneNum : user.userPhoneNum
				},
				dataType : 'xml', // 서버에서 보내오는 데이터 타입
				success : function(data) { // 서버에서 보내오는 데이터

					var messageValue = $(data).find('message').text(); // 여기 나중에 수정
					isSuccess = eval('(' + messageValue + ')');

				}
			});
		} catch (e) {
			console.log('userDao 객체 : userInsert 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};
	
	
	
	// 회원가입 닉네임 중복확인
	this.userNicknameCheck = function(nickname) {

		try {
			
			$.ajax({
				url : '/', // 닉네임 중복 체크할 곳
				async : false,  // false: 동기, true: 비동기
				type : 'post',
				data : {
					nickname : nickname
				},
				dataType : 'xml', // 서버에서 보내오는 데이터 타입
				success : function(data) { // 서버에서 보내오는 데이터
	
					var messageValue = $(data).find('message').text(); // 여기 나중에 수정
					isSuccess = eval('(' + messageValue + ')');
					// 위 or 아래
					if(data == 1){//사용할 수 없는 아이디
		    			alert("사용할 수 없는 닉네임입니다.");
		    	    	$("#nickname").val("");
		    	     }else if(data == -1)//사용할 수 있는 아이디
		    	  	    alert("사용할 수 있는 닉네임입니다.");
				}
			});
		} catch (e) {
			console.log('userDao 객체 : nickNameCheck 메서드에서 예외 발생');
			console.log(e.message);
		}
		return isSuccess;
	}

	// 로그인 메서드
	this.userLogin = function(user) {

		try {

			$.ajax({
				url : '/', // 홈페이지 불러올 주소
				async : false, // false: 동기, true: 비동기
				type : 'post', // 요청방식 get or post
				data : {
					userId : user.uesrId,
					userPw : user.userPw
				},
				dataType : 'xml', // 서버에서 보내오는 데이터 타입
				success : function(data) { // 서버에서 보내오는 데이터

					var messageValue = $(data).find('message').text(); // 여기 나중에 수정
					isSuccess = eval('(' + messageValue + ')');

				}
			});
		} catch (e) {
			console.log('userDao 객체 : userLogin 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

}