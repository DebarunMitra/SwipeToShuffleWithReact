import styled, { css } from 'styled-components'

export const SwipeToShuffle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`

export const SwipeToShuffleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgb(29,29,107);
  background: linear-gradient(145deg, rgba(29,29,107,1) 0%, rgba(0,0,54,1) 100%);
  padding: 20px;

  .wrapper{
    background: #fff;
    padding: 25px;
    max-width: 460px;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
  }

  .wrapper .item{
    color: #fff;
    display: flex;
    margin-bottom: 8px;
    padding: 12px 17px;
    background: rgb(29,29,107);
    background: linear-gradient(145deg, rgba(29,29,107,1) 0%, rgba(0,0,54,1) 100%);
    border-radius: 3px;
    align-items: center;
    justify-content: space-between;
  }

  .wrapper .item:last-child{
    margin-bottom: 0px;
  }
  .wrapper .item .text{
    font-size: 18px;
    font-weight: 400;
  }
  .wrapper .item i{
    font-size: 18px;
    cursor: pointer;
  }
`

export const SwipeToShuffleWrapper = styled.div`

`
