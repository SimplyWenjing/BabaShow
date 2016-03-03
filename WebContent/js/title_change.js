	
/*实现*/
	var titleMy = document.getElementById("my");
	var titleStar = document.getElementById("star");
	var myContainer = document.getElementById("my-container");
	var starContainer = document.getElementById("star-container");


	titleMy.addEventListener ("click",function(){
		titleMy.style.display = "none";
		titleStar.style.display = "block";
		myContainer.style.display = "block";
		starContainer.style.display = "none";
	},false);

	titleStar.addEventListener("click",function(){
		titleMy.style.display = "block";
		titleStar.style.display = "none";
		myContainer.style.display = "none";
		starContainer.style.display = "block";
},false);
	
	
	/*序列化表单数据*/
	function serialize(form){        
        var parts = new Array();
        var field = null;
        for (var i=0, len=form.elements.length; i < len; i++){
            field = form.elements[i];
            parts.push(encodeURIComponent(field.name) + "=" + 
            encodeURIComponent(field.value));                
        }        
        return parts.join("&");
    }
    /*向后台提交数据*/
    function submitData(){
            var xhr = new XMLHttpRequest();       
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4){
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                        alert(xhr.responseText);
                        var data = JSON.parse(xhr.responseText);
                        console.log(data);
                    } else {
                        alert("Request was unsuccessful: " + xhr.status);
                    }
                }
            };
            xhr.open("post", "db.jsp", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var form = document.getElementById("info");            
            xhr.send(serialize(form));
        }