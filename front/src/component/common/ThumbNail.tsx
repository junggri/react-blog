import React, { useRef } from "react";
import { ThumbnailComp } from "../../styledComponent";

interface IThumbNail {
   token: string | null
   onChangeThumbnail: any
}

interface Ref extends HTMLImageElement {
   src: any
}


const ThumbNail = ({ token, onChangeThumbnail }: IThumbNail) => {
   const imgRef: React.RefObject<Ref> = useRef(null);
   const onChangeImg = async (e: any) => {
      if (imgRef.current && token) {
         const formData = new FormData();
         const target = e.target as HTMLInputElement;
         const file: File = (target.files as FileList)[0];
         formData.append("data", file);
         imgRef.current.src = URL.createObjectURL(file);
      }
   };

   return (
      <ThumbnailComp>
         <h1>ThumbNail</h1>
         <input type="file" name="file" accept="image/*" multiple onChange={onChangeImg} />
         <h2>이미지 저장할때 jpg, png로 저장해야한다 svg는 사용할 수 없다는 거 알지?</h2>
         <section className="thumbnail-imgbox">
            <img ref={imgRef} />
         </section>
      </ThumbnailComp>
   );
};

export default React.memo(ThumbNail);