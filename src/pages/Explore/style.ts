import styled from 'styled-components';
import px2vw from '../../utili/px2vw';


export const Head = styled.div`
display: flex;
flex-direction: row;
gap:  ${px2vw(54, 414)};

h1 {

font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: ${px2vw(34, 414)};
line-height:${px2vw(43, 414)};

letter-spacing: 0.04em;
}

input {

width: ${px2vw(185, 414)};
height: ${px2vw(35, 414)};
margin-top: ${px2vw(28, 414)};
border: none;
background: #FFFFFF;
border-radius: ${px2vw(20, 414)};
filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.15));

::placeholder {
    padding-left: ${px2vw(50, 414)};
    font-style: normal;
    font-weight: normal;
    font-size: ${px2vw(15, 414)};
    line-height:${px2vw(18, 414)};

color: rgba(0, 0, 0, 0.83);
  }

}

img {

position: absolute;
left: 55.31%;
right: 41.06%;
top: 6.4%;
bottom: 94.2%;
}
`

export const Page = styled.div`

margin-left: ${px2vw(16, 414)};
margin-right: ${px2vw(16, 414)};

`

export const Section = styled.div`

display: flex;
flex-direction: row;
gap: ${px2vw(54, 414)};
margin-top: ${px2vw(64, 414)};

h3 {

font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: ${px2vw(28, 414)};
line-height: ${px2vw(35, 414)};

    
color: #000000;
}
`

