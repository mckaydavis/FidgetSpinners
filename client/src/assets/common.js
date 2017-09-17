var statueRef=null;

function callShoutMe(ref,val){
    ref.shoutMe(val);
}

function callFromLink(val){
    statueRef.shoutMe(val);
}