import { Typography } from '@mui/material'

export default function Message() {
  return (
    <div className='container my-5 p-5' style={{backgroundColor:'#F5B626'}}>
        <Typography className='my-4 py-3 words' variant='h5'>MESSAGE HEADING</Typography>
        <h2 className='my-3 lead words' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><br/> Illo animi aut quo non quos amet sint voluptates, dolores ab, possimus sapiente adipisci dolor, dolorem asperiores ut corporis a dolorum rem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><br/> Illo animi aut quo non quos amet sint voluptates, dolores ab, possimus sapiente adipisci dolor, dolorem asperiores ut corporis a dolorum rem.
        </h2>
    </div>
  )
}
