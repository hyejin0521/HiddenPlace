package com.phoenix.hiddenplace.service;

import com.phoenix.hiddenplace.domain.User;

public interface UserService {

	// 회원가입
	public void create(User user) throws Exception;

	// 닉네임 중복확인
	public String nicknameCheck(String nickname) throws Exception;

	public User readMyPage(String userId) throws Exception;

	// 회원정보 수정
	public void modify(User user) throws Exception;

	// 회원탈퇴
	public void delete(String userPw) throws Exception;
	
	//로그인
	public User login(User user) throws Exception;

}
