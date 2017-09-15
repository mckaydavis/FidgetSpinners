var statueRef=null;

function callShoutMe(ref,val){
    console.log("callShoutMe: "+val);
    ref.shoutMe(val);
}

function callFromLink(val){
    console.log("callFromLink: "+val);
    statueRef.shoutMe(val);
}