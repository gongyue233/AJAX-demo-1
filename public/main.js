let n = 1;
//加载CSS
getCSS.onclick=()=>{
    const request = new XMLHttpRequest();  
    request.open("GET","/style.css");
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const style = document.createElement('style');
                style.innerHTML=request.response;
                document.head.appendChild(style);
            }else{
                alert("加载CSS失败")
            }
        }
    };
    request.send();    
};
//加载JS
getJS.onclick=()=>{
    const request = new XMLHttpRequest();  
    request.open("GET","/2.js");
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const script = document.createElement('script');
                script.innerHTML=request.response;
                document.body.appendChild(script);
            }else{
                alert("加载JS失败")
            }
        }
    };
    request.send();    
};
//加载HTML
getHTML.onclick=()=>{
    const request = new XMLHttpRequest();  
    request.open("GET","/3.html");
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const div= document.createElement('div');
                div.innerHTML=request.response;
                document.body.appendChild(div);
            }else{
                alert("加载HTML失败")
            }
        }
    };
    request.send();
};
//加载XML
getXML.onclick=()=>{
    const request = new XMLHttpRequest();  
    request.open("GET","/4.xml");
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const dom= request.responseXML;
                const text=dom.getElementsByTagName('to')[0].textContent
                console.log(text.trim())
            }else{
                alert("加载XML失败")
            }
        }
    };
    request.send();
};
//加载JSON
getJSON.onclick=()=>{
    const request = new XMLHttpRequest();  
    request.open("GET","/5.json");
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            console.log(typeof request.response);
            console.log(request.response);
            const bool=JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    };
    request.send();
};
// 加载分页
getPage.onclick=()=>{
    const request = new XMLHttpRequest(); 
    n+=1; 
    request.open("GET",`/page${n}.json`);
    request.onreadystatechange =()=>{
        if(request.readyState===4 && request.status===200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });            
        }
    }
    request.send();
};



