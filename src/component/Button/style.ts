import styled from 'styled-components';
import px2vw from '../../utili/px2vw';

export const Btn = styled.div`
margin-top: ${px2vw(20, 414)};

button {

width: ${px2vw(150, 414)};
height: ${px2vw(54, 414)};
background: #1976D2;
border-radius: ${px2vw(20, 414)};
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size:  ${px2vw(15, 414)};
line-height:  ${px2vw(19, 414)};
border: none;
cursor: pointer;

color: #FFFFFF;
}

@media (min-width: 768px) {
    button {

    width: ${px2vw(330, 1440)};
    height: ${px2vw(55, 1440)};
    border-radius: ${px2vw(20, 1440)};

    font-size:  ${px2vw(20, 1440)};
    line-height:  ${px2vw(25, 1440)};

    }
}

`

