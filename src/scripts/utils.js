module.exports = function() {

	/*
	Originally written by "Mac" http://stackoverflow.com/a/25490531/5759077
	*/
	this.getCookieInfo = function(name) {
		var cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
		return cookie ? cookie.pop() : "";
	}
}