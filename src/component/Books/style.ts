import styled from 'styled-components';
import px2vw from '../../utili/px2vw';

export const Inner = styled.div`

img {

width:  ${px2vw(365, 414)};
height: ${px2vw(551, 414)};
}

h4 {
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: ${px2vw(24, 414)};
line-height: ${px2vw(19, 414)};
text-align: center;
color: #000000;
}

p {

font-family: Source Sans Pro;
font-style: normal;
font-weight: 600;
font-size: ${px2vw(17, 414)};
line-height: ${px2vw(19, 414)};
text-align: center;
}

    @media (min-width: 768px) {
       img {

        width:  ${px2vw(365, 1440)};
        height: ${px2vw(551, 1440)};
        }
        
        h4 {

        font-size: ${px2vw(24, 1440)};
        line-height: ${px2vw(19, 1440)};
        text-align: unset;
        margin-left: ${px2vw(80, 1440)};
     
        }
        
        p {
        
        font-size: ${px2vw(17, 1440)};
        line-height: ${px2vw(19, 1440)};
        text-align: unset;
        margin-left: ${px2vw(80, 1440)};
     
        }

    }

`

export const Category = styled.div`
background: #F0F2F4;
border-radius:${px2vw(20, 414)};
width: ${px2vw(90, 414)};
height: ${px2vw(25, 414)};
margin: 0 auto;

p {

font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: ${px2vw(15, 414)};
line-height: ${px2vw(21, 414)};
}

@media (min-width: 768px) {
    border-radius: ${px2vw(20, 1440)};
    width: ${px2vw(90, 1440)};
    height: ${px2vw(25, 1440)};
    margin-left:  ${px2vw(90, 1440)};

    p {

    font-size: ${px2vw(15, 1440)};
    line-height: ${px2vw(21, 1440)};
    text-align: center;
    margin: 0;
    }

}
`

export const Outter = styled.div`

margin-top: ${px2vw(64, 414)};
margin-bottom: ${px2vw(32, 414)};

@media (min-width: 768px) {
    margin-top: ${px2vw(64, 1440)};
    margin-bottom: ${px2vw(32, 1440)};

}
`