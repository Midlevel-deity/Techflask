import styled from 'styled-components';

export const TopbarStyle = styled.div`
background: linear-gradient(50deg, rgb(252, 53, 76), rgb(117, 58, 136), rgb(10, 191, 188));
height: auto;
padding: 15px 5px;
& #open {
    display: none;
}
& #icon {
    cursor: pointer;
    color: #fff;
    font-size: 25px;
}
& #icon:hover {
    color: #ff4081;
    transition: 0.5s;
}
& a {
    color: #fff;
    font-size: 35px;
    font-family: 'Suez One', serif;
    text-decoration: none;
}
& .search {
    outline: none;
    border: none;
    border-left: 1px solid #ddd;
    background: transparent;
    color: #fff;
    height: 35px;
    width: 18%;
    margin-left: .5%;
    font-size: 16px;
    text-indent: 5px;
    position: relative;
    top: -7px;
}
& .search::-webkit-input-placeholder {
    color: #fff;
    transition: all 0.2s ease;
}
& .search::-moz-placeholder {
    color: #fff;
    transition: all 0.2s ease;
}
& .search:-ms-input-placeholder {
    color: #fff;
    transition: all 0.2s ease;
}
& .search:-o-input-placeholder {
    color: #fff;
    transition: all 0.2s ease;
}    
& .search:focus::-webkit-input-placeholder {
    color: transparent;
}
& .search:focus::-moz-placeholder {
    color: transparent;
}
& .search:-moz-placeholder {
    color: transparent;
}
& ul {
    float: right;
    padding: 7px;
}
& ul a {
    margin: 0 1vw;
    font-size: 25px;
}
& ul a:hover {
    color: #ff4081;
    transition: 0.5s;
}
& #dropdown {
    display: none;
}
@media (max-width: 736px){
    padding: 10px;
    & .search {
        width: 100%;
        margin-left: 0;
        position: relative;
        top: 0;
        left: 0;
    }
    & ul {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    & ul a {
        display: none;
    }
    & #dropdown {
        display: inline-block;
    }
}
@media (max-width: 991px){
    & #open {
        display: inline-block;
        position: relative;
        top: -2px;
    }
    & a {
        margin-left: .5%;
    }
    & .btn {
        width: 15%;
    }
}
`;
export const MenuStyle = styled.div`
background: #fff;
height: auto;
text-align: center;
z-index: 999;
& a {
    display: block;
    border-bottom: 1px solid #ddd;
    color: #000;
    padding: 20px 0;
    font-size: 18px;
    text-decoration: none;
}
& a:last-child {
    border-bottom: none;
}
& a:hover {
    color: #ff4081;
    transition: 0.5s;
}
@media (max-width: 736px){
}
@media (max-width: 991px){
}
`;
export const DropdownStyle = styled.div`
display: none;
@media (max-width: 736px){
    display: inline-block;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    padding: 10px;
    z-index: 999;
    text-align: center;
    position: absolute;
    top: 11px;
    right: 40px;
    & ::after {
        content: "";
        border-style: solid;
        border-color: transparent transparent transparent #fff;
        border-width: 5px;
        margin-top: -5px;
        position: absolute;
        top: 50%;
        left: 100%;
    }
    & a {
        display: inline-block;
        color: #000;
        margin: 0 2vw;
        font-size: 20px;
        text-decoration: none;
    }
    & a:hover {
        color: #ff4081;
        transition: 0.5s;
    }  
}
@media (max-width: 991px){   
}
`;
export const LatestbarStyle = styled.div`
background: #fff;
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
height: auto;
padding: 15px 0px;
overflow: auto;
white-space: nowrap;
& p {
    display: inline-block;
    background: #fff;
    border-right: 1px solid #ddd;
    color: #000;
    padding-right: 5px;
    padding-left: 10px;
    font-size: 18px;
    position: sticky;
    left: 0px;
}
& a {
    color: #000;
    margin: 0px 1vw;
    font-size: 18px;
    text-decoration: none;
}
& a:hover {
    color: #ff4081;
    transition: 0.5s;
}
@media (max-width: 736px){
}
@media (max-width: 991px){
}
`;
export const BannerStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center center;
background-size: cover;
background-image: url("https://source.unsplash.com/EG49vTtKdvI");
height: auto;
width: 80%;
padding-top: 50px;
padding-bottom: 50px;
position: relative;
top: 20px;
left: 10px;
& ul {
    background: rgba(255,255,255,0.8);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    width: 721px;
    padding: 40px 10px 10px;
    text-align: center;
}
& h1 {
    color: #000;
    margin-bottom: 15px;
    font-size: 40px;
    text-align: left;
}
& p {
    color: #000;
    margin-bottom: 15px;
    font-size: 18px;
    text-align: left;
}
& .btn {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background: #ff4081;
    color: #fff;
    height: auto;
    width: 30%;
    padding: 10px;
    font-size: 18px;
}
& .btn:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
@media (max-width: 736px){
    padding: 10px;
    & ul {
        width: auto;
        padding: 10px;
    }
    & h1, p {
        text-align: center;
    }
    & .btn {
        width: 90%;   
    }
}
@media (max-width: 991px){
    width: auto;
    position: relative;
    top: 0;
    left: 0;
}
`; 
export const SidebarStyle = styled.div`
float: right;
height: auto;
width: 18%;
margin-top: 20px;
position: sticky;
top: 0;
right: .5%;
& ul {
    border-left: 1px solid #ddd;
    height: auto;
    width: auto;
    padding: 10px;
}
& h1 {
    border-bottom: 1px solid #ddd;
    color: #000;
    font-size: 30px;
}
& a {
    display: block;
    border-bottom: 1px solid #ddd;
    color: #000;
    padding: 20px 5px;
    font-size: 18px;
    text-decoration: none;
}
& a:hover {
    color: #ff4081;
    transition: 0.5s;
}
& a:last-child {
    border-bottom: none;
}
& #social {
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    margin-top: 10px;
    padding: 10px;
    text-align: center;
}
& .icon {
    height: 130px;
    width: 130px;
}
& #social p {
    color: #000;
    margin-bottom: 10px;
    font-size: 18px;
}
& #social a {
    display: block;
    border-bottom: none;
    padding: 0;
}
& .btn {
    padding: 5px;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background: #ff4081;
    color: #fff;
    height: auto;
    width: 90%;
    padding: 10px;
    font-size: 18px;
}
& .btn:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    transition: 0.5s;
}
@media (max-width: 736px){
}
@media (max-width: 991px){
    display: none;
}
`;
export const ContentStyle = styled.div`
height: auto;
width: 78.5%;
padding: 10px;
text-align: center;
position: relative;
top: 30px;
left: 10px;
& h1 {
    border-bottom: 1px solid #ddd;
    color: #000;
    margin-bottom: 10px;
    font-size: 32px;
    text-align: left;
}
& ul {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    width: 31%;
    margin: 5px;
    text-align: center;
}
& .img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
}
& .usr {
    border-radius: 50%;
    border: 4px solid #fff;
    height: 100px;
    width: 100px;
    margin-top: -66px;
}
& .memimg {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}
& h2 {
    color: #000;
    margin-bottom: 10px;
    font-size: 30px;
}
& p {
    color: #000;
    margin-bottom: 10px;
    font-size: 18px;
}
& .btn {
    outline: none;
    cursor: pointer;
    border: none;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #ff4081;
    color: #fff;
    height: auto;
    width: 100%;
    padding: 10px;
    font-size: 18px;
}
@media (max-width: 736px){
    padding: 0;
    & ul {
        width: auto !important;
    }
}
@media (max-width: 991px){
    width: auto;
    position: relative;
    top: 20px;
    left: 0;
    
}
`;
export const ArticleBanner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center center;
background-size: cover;
background-image: url("https://source.unsplash.com/random");
height: auto;
width: 80%;
padding-top: 50px;
padding-bottom: 50px;
position: relative;
top: 20px;
left: 10px;
& ul {
    background: rgba(255,255,255,0.8);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: auto;
    width: 721px;
    padding: 10px;
    text-align: center;
}
& .usr {
    border-radius: 50%;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
}
& h1 {
    color: #000;
    margin-bottom: 10px;
    font-size: 35px;
    font-weight: bold;
}
& a {
    color: #000;
    margin: 0 1vw;
    font-size: 25px;
    text-decoration: none;
}
& a:hover {
    color: #ff4081;
    transition: 0.5s;
}
@media (max-width: 736px){
    padding: 10px;
    & ul {
        width: 90%;
        padding: 10px;
    }
    & a {
        margin: 0 3vw !important;
    }
}
@media (max-width: 991px){
    width: auto;
    position: relative;
    top: 0;
    left: 0;
    & a {
        margin: 0 2vw;
    }
}
`;
export const ArticleStyle = styled.div`
height: auto;
width: 78.5%;
padding: 10px;
text-align: center;
position: relative;
top: 30px;
left: 10px;
& h1 {
    color: #000;
    margin-bottom: 10px;
    font-size: 35px;
}
& .img {
    width: 100%;
}
& iframe {
    border: none;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    height: 315px;
    width: 560px;
}
& #break {
    color: #999;
    font-size: 50px;
}
& p {
    color: #000;
    font-size: 18px;
}
& h2 {
    color: #000;
    margin-bottom: 10px;
    font-size: 35px;
    text-align: left;
}
@media (max-height: 414px){
    & iframe {
        height: 315px !important;
        width: 100%;
    }
}
@media (max-width: 736px){
    & iframe {
        height: 200px;
        width: 100%;
    }
}
@media (max-width: 991px){
    width: auto;
    position: relative;
    top: 0;
    left: 0;
}
`;
export const ErrorStyle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 100vh;
& a {
    color: #000;
    font-size: 25px;
    text-decoration: none;
    position: absolute;
    top: 15px;
    left: 15px;
}
& h1 {
    border-right: 4px solid #000;
    color: #000;
    padding-right: 10px;
    font-size: 50px;
    font-weight: 100;
}
& p {
    padding-left: 10px;
    font-size: 25px;
}
@media (max-width: 736px){
    flex-direction: column;
    & h1 {
        border-right: none;
        padding-right: 0;
    }
    & p {
        padding-left: 0;
    }    
}
`;