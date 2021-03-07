import React, { useRef } from "react";
import { ThumbnailComp } from "../../styledComponent";
import util from "@lib/axios";
import { AxiosResponse } from "axios";
import { IThumbNail, IThumbnailFetchData, Ref } from "@src/globalInterface";


const ThumbNail = ({ token, onChangeThumbnail }: IThumbNail) => {
   const imgRef: React.RefObject<Ref> = useRef(null);
   const btnRef = useRef<HTMLInputElement>(null);

   const onChangeImg = async (e: any) => {
      if (imgRef.current && token) {
         const formData = new FormData();
         const target = e.target as HTMLInputElement;
         const file: File = (target.files as FileList)[0];
         formData.append("data", file);
         imgRef.current.src = URL.createObjectURL(file);
         const { data }: AxiosResponse<IThumbnailFetchData> = await util.saveThumbnail(token, formData);
         onChangeThumbnail(data.filename);
      }
   };

   const onCLickBtn = () => {
      if (btnRef.current) btnRef.current.click();
   };

   return (
      <ThumbnailComp>
         <h1>포스트 미리보기</h1>
         <input type="file" name="file" accept="image/*" multiple onChange={onChangeImg} ref={btnRef} />
         <h2>이미지 저장할때 jpg, png로 저장해야한다 svg는 사용할 수 없다는 거 알지?</h2>
         <section className="thumbnail-imgbox">
            <img ref={imgRef} src='/images/Logo.svg' />
         </section>
         <div className="thumbnail-btn" onClick={onCLickBtn}>썸네일 선택하기</div>
      </ThumbnailComp>
   );
};

export default React.memo(ThumbNail);