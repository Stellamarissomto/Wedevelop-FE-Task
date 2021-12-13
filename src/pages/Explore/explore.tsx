import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Button from "../../component/Button";
import Books from "../../component/Books";
import { images } from "../../images";
import { Head, Page, Section, BookSection } from "./style"
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from '../../features/book/bookSlice'
import { RootState } from '../../app/store';

const Explore: React.FC = () => {

    const dispatch = useDispatch();
    const { book } = useSelector( (state: RootState) => state.book);
    console.log(book)

    useEffect(() => {
        dispatch(getBooks());
      }, [dispatch]);


    return (
      <Page>
          <Head>
              <h1>Explore</h1>
              <div>
              <input placeholder="Search for books"/>
              <img src={images.search} alt="search bar" />
              </div>
          </Head>

          <Section>
              <h3>Popular Now</h3>
              <Link to='/favorite'>
              <Button content="Favourite Books"/>
              </Link>
          </Section>

          <BookSection>
              {
                  book.book && book.book.map((books: any) => (
                    <Books image={books.image} title={books.title} author={books.author.lastname} category={books.category}/>

                  ))
              }
          </BookSection>

     </Page>

    )
}



export default Explore