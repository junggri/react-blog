import React from "react";
import { DisplayCotainerComp, DisplayItemComp, EntryContainerComp } from "../styledComponent";
import { NavBar } from "../component";

const Entry = () => {
   return (
      <EntryContainerComp>
         <NavBar />
         <DisplayCotainerComp>
            <DisplayItemComp>
               <h1>content name</h1>
               <div className="meta">
                  <h2>detial</h2>
               </div>
               <div className="item-img">
               </div>
            </DisplayItemComp>
            <DisplayItemComp>
               <h1>content name</h1>
               <div className="meta">
                  <h2>detial</h2>
               </div>
               <div className="item-img">
               </div>
            </DisplayItemComp>

         </DisplayCotainerComp>
      </EntryContainerComp>
   );
};
export default Entry;