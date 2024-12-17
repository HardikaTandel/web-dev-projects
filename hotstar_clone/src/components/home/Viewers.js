import React, { memo } from "react";
import styled from "styled-components";

const Viewers = memo((props) => {
    return (
        <Containers>
            <Wrap>
                <div className="img-wrapper">
                    <img src="/images/viewers-disney.png" />
                    </div>
                    <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                    </video>
            </Wrap>
            <Wrap>
                <div className="img-wrapper">
                    <img src="/images/viewers-marvel.png" />
                </div>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                    </video>
            </Wrap>
            <Wrap>
                <div className="img-wrapper">
                    <img src="/images/viewers-national.png" />
                </div>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                    </video>
            </Wrap>
            <Wrap>
                <div className="img-wrapper">
                    <img src="/images/viewers-pixar.png" />
                </div>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                    </video>
            </Wrap>
            <Wrap>
                <div className="img-wrapper">
                    <img src="/images/viewers-starwars.png" />
                </div>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                        <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                    </video>
            </Wrap>
        </Containers>
    );
});

const Containers = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 2%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform;


    .img-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;

    }
        video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    
}

&:hover {

box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
rgb(0 0 0/72%) 0px 30px 22px -10px;

transform: scale (1.05);
border-color: rgba(249, 249, 249, 0.8);

video {
    opacity: 1;
}
    }

`;

export default Viewers;
