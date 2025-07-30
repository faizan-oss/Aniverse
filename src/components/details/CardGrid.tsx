import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
const CardGrid = (props:any) => {
  return (
    <>
         <ImageList sx={{ height: 450 }}>
      <ImageListItem key="Subheader" cols={8}>
      </ImageListItem>
      {props?.charactersData?.map((item:any, idx:number) => (
        <Box
          key={item?.character?.mal_id}
          className="fade-in-up character-card"
          style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
          sx={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            borderRadius: 4,
            boxShadow: 6,
            p: 2,
            m: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 220,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.04)',
              boxShadow: 12,
            },
          }}
        >
          <img
            srcSet={`${item?.character?.images?.jpg?.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item?.character?.images?.jpg?.image_url}?w=248&fit=crop&auto=format`}
            alt={item?.character?.name}
            loading="lazy"
            width='180px' height='220px'
            style={{ borderRadius: 12, objectFit: 'cover', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          />
          <ImageListItemBar
            title={<span style={{ fontWeight: 600, color: '#1976d2', fontSize: 18 }}>{item?.character?.name}</span>}
            position="below"
            sx={{ background: 'transparent', textAlign: 'center', mt: 1 }}
          />
        </Box>
      ))}
    </ImageList>
    
    </>
  )
}

export default CardGrid
