import {Component} from 'react'
import {
  Heading,
  MemeForm,
  MemeLabel,
  MemeInput,
  MemeSelect,
  MemeOption,
  MemeButton,
  MemeMainContainer,
  MemeImageContainer,
  MemePrimaryContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSize: fontSizesOptionsList[0].optionId,
    backgroundUpdate: '',
    topTextUpdate: '',
    bottomTextUpdate: '',
    activeFontSizeUpdate: '',
  }

  formSubmitted = event => {
    event.preventDefault()
    const {
      backgroundInput,
      topTextInput,
      bottomTextInput,
      activeFontSize,
    } = this.state

    this.setState({
      backgroundUpdate: backgroundInput,
      topTextUpdate: topTextInput,
      bottomTextUpdate: bottomTextInput,
      activeFontSizeUpdate: activeFontSize,
    })
  }

  onChangeBackgroundImage = event => {
    this.setState({
      backgroundInput: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      topTextInput: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomTextInput: event.target.value,
    })
  }

  onChangeFontSize = event => {
    this.setState({
      activeFontSize: event.target.value,
    })
  }

  render() {
    const {
      backgroundInput,
      topTextInput,
      bottomTextInput,
      activeFontSize,
      backgroundUpdate,
      topTextUpdate,
      bottomTextUpdate,
      activeFontSizeUpdate,
    } = this.state
    return (
      <>
        <MemeMainContainer>
          <MemePrimaryContainer onSubmit={this.formSubmitted}>
            <Heading>Meme Generator</Heading>
            {/* <p>{JSON.stringify(this.state)}</p> */}
            <MemeForm>
              <MemeLabel htmlFor="imageUrl">Image URL</MemeLabel>
              <MemeInput
                id="imageUrl"
                type="text"
                value={backgroundInput}
                onChange={this.onChangeBackgroundImage}
                placeholder="Enter the Image URL"
              />
              <MemeLabel htmlFor="topText">Top Text</MemeLabel>
              <MemeInput
                id="topText"
                type="text"
                value={topTextInput}
                onChange={this.onChangeTopText}
                placeholder="Enter the Top Text"
              />
              <MemeLabel htmlFor="bottomText">Bottom Text</MemeLabel>
              <MemeInput
                id="bottomText"
                type="text"
                value={bottomTextInput}
                onChange={this.onChangeBottomText}
                placeholder="Enter the Bottom Text"
              />
              <MemeLabel htmlFor="select">Font Size</MemeLabel>
              <MemeSelect
                id="select"
                value={activeFontSize}
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <MemeOption key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </MemeOption>
                ))}
              </MemeSelect>
              <MemeButton type="submit">Generate</MemeButton>
            </MemeForm>
          </MemePrimaryContainer>
          <MemeImageContainer data-testid="meme" bg={backgroundUpdate}>
            <TextContent fontSize={activeFontSizeUpdate}>
              {topTextUpdate}
            </TextContent>
            <TextContent fontSize={activeFontSizeUpdate}>
              {bottomTextUpdate}
            </TextContent>
          </MemeImageContainer>
        </MemeMainContainer>
      </>
    )
  }
}

export default MemeGenerator
