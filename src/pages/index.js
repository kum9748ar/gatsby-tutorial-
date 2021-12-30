import * as React from 'react';
let sytles = {
  mainStyle: {
    color: 'blue',
    padding:'30px',
    font:"Arial, Helvetica, sans-serif"
   },
   imagsStyle:{
     width:"400px",
     radius:"10px"
   }
};
const IndexPage = () => {
  return (
    <main style={sytles.mainStyle}>
      <title>My Gatsby tutorial</title>
      <h1>Hi, there I am gatsby app</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus
        labore magni facere est autem eum provident expedita laudantium. Magni
        vitae quia impedit delectus quo iste aliquam rerum, ipsa natus. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ex
        accusantium deleniti et sint perspiciatis similique deserunt, molestias
        nam, quas cumque id! Esse necessitatibus animi eos quibusdam sunt ad
        dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Soluta itaque delectus in, inventore, voluptatem at ab beatae pariatur
        magni eum omnis! Voluptatum quo dicta nostrum. Sit numquam
        exercitationem asperiores quibusdam.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        necessitatibus? Sunt dolorem corporis provident vero molestiae. Natus
        inventore velit assumenda quis accusantium beatae, quaerat molestias
        sapiente quos? Atque, quia saepe.
        <hr />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        assumenda veniam distinctio delectus molestiae, itaque nemo cupiditate
        sint sequi ad, dolorum asperiores magnam accusamus. Molestiae dicta
        alias recusandae nostrum numquam.
      </h4>
      <img src={'https://picsum.photos/200/300'} alt="an image" style={sytles.imagsStyle} />
    </main>
  );
};

export default IndexPage;
