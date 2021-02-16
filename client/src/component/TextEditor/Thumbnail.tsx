import React, { useRef } from "react";
import { ThumbnailComp } from "../../styled-comp";
import util from "../../lib/axios";


const Thumbnail = ({ token, onChangeThumbnail }: { token: string, onChangeThumbnail: any }) => {
   const imgRef: any = useRef(null);

   const onChangeImg = async (e: any) => {
      const formData = new FormData();
      formData.append("data", e.target.files[0]);
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      const { data } = await util.saveThumbnail(token, formData);
      onChangeThumbnail(data.filename);
   };

   return (
      <ThumbnailComp>
         <div className="thumbnail-slo">썸네일 이미지 설정</div>
         <input type="file" name="file" accept="image/*" multiple onChange={onChangeImg} />
         <h2>이미지 저장할때 jpg, png로 저장해야한다 svg는 사용할 수 없다는 거 알지?</h2>
         <section className="thumbnail-imgbox">
            <img ref={imgRef} />
         </section>
      </ThumbnailComp>
   );
};

export default React.memo(Thumbnail);