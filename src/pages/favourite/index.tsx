import React from 'react';
import Books from "../../component/Books";
import { Page, BookSection } from "../Explore/style";
import { images } from "../../images";


const Favorite: React.FC = () => {

    return (
        <Page>
            <BookSection>
              <Books image={images.magic} title="Magic’s Child" author="The Past Is Rising" category="fiction"/>
              <Books image={images.thepast} title="jjjj" author="kkkk" category="kkkkkk"/>
              <Books image={images.cind} title="jjjj" author="kkkk" category="kkkkkk"/>
              <Books image={images.cind} title="jjjj" author="kkkk" category="kkkkkk"/>
              <Books image={images.cind} title="jjjj" author="kkkk" category="kkkkkk"/>
              <Books image={images.cind} title="jjjj" author="kkkk" category="kkkkkk"/>
          </BookSection>

     </Page>
    )
}



export default Favorite