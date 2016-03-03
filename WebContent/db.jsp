<%@ page language="java" contentType="text/html; charset=gbk"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Statement"%>
<%
	request.setCharacterEncoding("utf-8");
	String babyName = request.getParameter("baby-name");
	String phoneNum = request.getParameter("phone");
	String photoContent = request.getParameter("photo-content");
	
	try {
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/baby";
		String user = "root";
		String pwd = "";
		Class.forName(driver);
		Connection conn = DriverManager.getConnection(url, user, pwd);	
		String addSQL = "insert into baby(babyName,phone,photoContent,photoUrl) values(?,?,?,?)"; 
		PreparedStatement pstmt = conn.prepareStatement(addSQL);
		pstmt.setString(1, babyName);
		pstmt.setString(2, phoneNum);
		pstmt.setString(3, photoContent);
		pstmt.setString(4, "wwww");
		pstmt.executeUpdate();
		}
	  catch (SQLException e) {
	            e.printStackTrace();
	  }
%>
{"success":true}
