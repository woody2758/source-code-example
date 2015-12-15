Shopping = {
    // ฟังกชั่น img loading
    loading:function(time){ 
        document.getElementById('loading').style.display = 'block';
        if(time){
            setTimeout(function() {
                document.getElementById('loading').style.display = 'none';
            }, (time*1000)); 
        } else {
            setTimeout(function() {
                document.getElementById('loading').style.display = 'none';
            }, 2000); 
        }
        
    }
};