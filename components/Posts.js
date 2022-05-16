import React from "react";
import Post from "./Post";
const posts = [{}];
export default function Posts() {
  return (
    <div>
      <Post
        message={"mmdlsakdl;ska;ldka;sl"}
        ner={"3453464645gdfd"}
        postimg={"https://source.unsplash.com/random"}
      />
      <Post message={"v;dfls,v;fvlf,d;vlf,;d"} ner={"dfsdf"} />
      <Post
        message={
          "alkkdhbv,b,,.nmqle';whst'ipzo;ijhjlet4qm5yworpthsu98zhugBJNkmlOPtau94taijg/kz"
        }
        ner={"fsddht5y534tweazgxcvjhlo76"}
      />
      <Post
        message={"asfdfmshl;mglz,dfxngmf,hhgj.h"}
        ner={"adsb.nfdht;sg,al"}
        postimg={"https://source.unsplash.com/random"}
      />
    </div>
  );
}
