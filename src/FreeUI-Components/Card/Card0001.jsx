const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  background-color: white;
  width: 220px;
  height: 270px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  position: relative;
  background-clip: border-box;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.75rem;
  background-color: rgb(33, 150, 243);
  box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4),
    0 4px 6px -4px rgba(33, 150, 243, 0.4);
  height: 14rem;
`;

const Info = styled.div`
  border: none;
  padding: 1.5rem;
  text-align: center;
`;

const Title = styled.p`
  color: rgb(38, 50, 56);
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Footer = styled.div`
  padding: 0.75rem;
  border: 1px solid rgb(236, 239, 241);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 140, 255, 0.082);
`;

const Tag = styled.p`
  font-weight: 300;
  font-size: 0.75rem;
  display: block;
`;

const Action = styled.button`
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(33, 150, 243, 0.4),
    0 2px 4px -2px rgba(33, 150, 243, 0.4);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33, 150, 243);
  border-radius: 0.5rem;
`;
const props = {
  copyBtn:
    "const CardMain = styled.div`\n" +
    `  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  background-color: white;
  width: 300px;
  height: 370px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
` +
    "\n`;" +
    "\nconst Header = styled.div`\n" +
    `  position: relative;
  background-clip: border-box;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.75rem;
  background-color: rgb(33, 150, 243);
  box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4),
    0 4px 6px -4px rgba(33, 150, 243, 0.4);
  height: 14rem;
` +
    "\n`;" +
    "\nconst Info = styled.div`\n" +
    `  border: none;
  padding: 1.5rem;
  text-align: center;
` +
    "\n`;" +
    "\nconst Title = styled.p`\n" +
    `  color: rgb(38, 50, 56);
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
` +
    "\n`;" +
    "\nconst Footer = styled.div`\n" +
    `  padding: 0.75rem;
  border: 1px solid rgb(236, 239, 241);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 140, 255, 0.082);
` +
    "\n`;" +
    "\nconst Tag = styled.p`\n" +
    `    font-weight: 300;
  font-size: 0.75rem;
  display: block;
` +
    "\n`;" +
    "\nconst Action = styled.button`\n" +
    `  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(33, 150, 243, 0.4),
    0 2px 4px -2px rgba(33, 150, 243, 0.4);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33, 150, 243);
  border-radius: 0.5rem;
` +
    "\n`;" +
    `\n return(
        <CardMain>
          <Header></Header>
          <Info>
            <Title>How to make this material card?</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi.
            </p>
          </Info>
          <Footer>
            <Tag>Styled</Tag>
            <Action type="button">Get started</Action>
          </Footer>
        </CardMain>
  )`,updateupdateupdateupdateupdateupdateupdateupdateupdateupdateupdate
  component: (
    <CardMain>
      <Header></Header>
      <Info>
        <Title>How to make card?</Title>
        <p>Lorem ipsum dolor sit</p>
      </Info>
      <Footer>
        <Tag>Styled</Tag>
        <Action type="button">Get started</Action>
      </Footer>
    </CardMain>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardLarge" props={props} />
  </>
);
