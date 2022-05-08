import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components/macro'

export const UniversalStyling = createGlobalStyle`
*{
    box-sizing: border-box;
    margin : 0px;
    padding: 10px;
}
`

export const Heading = styled.h1`
  color: #0b69ff;
  padding-left: 10px;
`
export const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`
export const MemeLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
`
export const MemeInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  border: 1px solid #d7dfe9;
  padding: 5px;
  height: 40px;
  border-radius: 5px;
  width: 100%;
`
export const MemeSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: ' Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`
export const MemeOption = styled.option`
  font-size: 16px;
`
export const MemeButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
  max-width: 150px;
  padding: 12px 24px;
  margin-top: 15px;
`
export const MemeMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
`
export const MemeImageContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;

background-image: url(${props => props.bg});
  width: 45%;
  margin-left: 10px;
  width: 100%;
  height: 300px
 background-size : cover
`
export const MemePrimaryContainer = styled.div`
  width: 45%;
  background-size: cover;
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
