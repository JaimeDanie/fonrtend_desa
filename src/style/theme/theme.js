import styled from "styled-components";

export const ButtonPrimary = styled.button`
    font-family: var(--font-primary);
    font-size: .9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-primary-1);
    background-color: var(--color-primary-3);
    border-radius: 2.25rem;
    border: none;
    padding: 0.6rem 0.8rem;
    width: ${props => props.width ? props.width : 'auto'};
    cursor: pointer;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`
export const ButtonSecondary = styled.button`
    font-family: var(--font-primary);
    font-size: .9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-primary-1);
    background-color: var(--color-light-2);
    border-radius: 2.25rem;
    border: none;
    padding: 0.6rem 0.8rem;
    width: ${props => props.width ? props.width : 'auto'};
    cursor: pointer;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const ButtonTertiaries = styled.button`
    font-family: var(--font-primary);
    font-size: .9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-light);
    background-color: var(--color-primary-1);
    border-radius: 2.25rem;
    border: none;
    padding: 0.6rem 0.8rem;
    width: ${props => props.width ? props.width : 'auto'};
    cursor: pointer;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const TitleSection = styled.h1`
    font-family: var(--font-primary);
    font-size: 3rem;
    color: var(--color-primary-1);
    text-align: ${props => props.align ? props.align : 'center'};
    text-transform: uppercase;
    margin: auto;
    @media screen and (max-width: 480px) {
        font-size: 2.25rem;
    }
`
export const SubTitleSection = styled.h3`
    font-family: var(--font-primary);
    font-size: 2.25rem;
    color: var(--color-primary-1);
    text-align: ${props => props.align ? props.align : 'center'};
    text-transform: uppercase;
    margin: ${props => props.margin ? props.margin : 'auto'};
    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
    }
`

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`