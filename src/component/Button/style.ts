import styled from 'styled-components';
import px2vw from '../../utili/px2vw';

export const Btn = styled.div`
margin-top: ${px2vw(20, 414)};

button {

width:  ${px2vw(150, 414)};
height: ${px2vw(54, 414)};
background: #1976D2;
border-radius: ${px2vw(20, 414)};
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size:  ${px2vw(15, 414)};
line-height:  ${px2vw(19, 414)};
border: none;

color: #FFFFFF;
}

`

