import { Autocomplete, Chip, Pagination, Rating, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

const CardSection = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [autoCompleteData, setAutoCompleteData] = useState([])
    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async (pageNumber?: number, q?: string) => {
        pageNumber || q ? setIsLoading(false) : setIsLoading(true)
        let page = pageNumber ? pageNumber : 1
        let query = q ? q : ''
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=12&q=${query}`);
        const data = await res.json();
        // setAutoCompleteData(data?.data?.map(item => item.title));
        setCardData(data?.data?.map((item:any)=> item));
        setPageCount(data?.pagination?.last_visible_page)
        pageNumber || q ? setIsLoading(false) : setIsLoading(false)
    }


    const setName = (animeName: string) => {
        if (animeName !== '' && animeName !== null && animeName !== undefined) {
            setCardData(cardData?.filter((item:any) => item?.title.toLowerCase() === animeName.toLowerCase()))
        } else {
            fetchData()
        }
    }

    const autoComplete = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=`);
        const data = await res.json();
        setAutoCompleteData(data?.data?.map((item:any) => item.title));
    }

    const handleChange = (_event:any, value:any) => {
        setPage(value)
        fetchData(value)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Container sx={{
            display: 'flex',
            justifyContent: { lg: 'space-around', sm: 'center', xs: 'center' },
            alignItems: 'center',
            width: "100%",
            // height: { lg: '100vh', md: '100%', xs: '100%' },
            flexDirection: "column",
            gap: '2rem',
            mt: "3rem"
        }}>

            {!isLoading ?
                (
                <>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: { lg: 'space-around', sm: 'center', xs: 'center' },
                            alignItems: 'center',
                            width: '100%',
                            flexWrap: "wrap",
                            gap: '1rem',
                        }}
                    >
                            <Typography
                                sx={{
                                    fontSize: { lg: '2.75rem', sm: '2.25rem', xs: '2rem' },
                                    fontWeight: 900,
                                    letterSpacing: 2,
                                    textAlign: { xs: 'center' },
                                    background: 'linear-gradient(90deg, #00fff7 0%, #1976d2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    mb: 1,
                                    mt: 1,
                                    fontFamily: 'Montserrat, Inter, Arial, sans-serif',
                                    textTransform: 'uppercase',
                                    lineHeight: 1.1,
                                    userSelect: 'none',
                                }}
                            >
                                Anime List
                            </Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            onOpen={autoComplete}
                            options={[...autoCompleteData]}
                            sx={{
                                width: 340,
                                fontFamily: 'Montserrat, Inter, Arial, sans-serif',
                                '.MuiInputBase-root': {
                                    borderRadius: '999px',
                                    background: '#fff',
                                    color: '#222',
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    boxShadow: '0 2px 12px 0 rgba(0,255,247,0.08)',
                                    border: '2px solid',
                                    borderColor: '#1781D5',
                                    transition: 'border 0.2s, box-shadow 0.2s',
                                    paddingLeft: '10px',
                                },
                                '.MuiInputBase-root.Mui-focused': {
                                    border: '2px solid #1781D5',
                                    boxShadow: '0 0 16px 2px #1781D5',
                                },
                                '.MuiAutocomplete-popupIndicator': {
                                    color: '#1781D5',
                                },
                                '.MuiAutocomplete-clearIndicator': {
                                    color: '#00fff7',
                                },
                                '.MuiAutocomplete-listbox': {
                                    background: '#fff',
                                    color: '#222',
                                    fontFamily: 'Montserrat, Inter, Arial, sans-serif',
                                },
                                '.MuiAutocomplete-option': {
                                    fontSize: '1.08rem',
                                    fontWeight: 500,
                                    borderRadius: '8px',
                                    transition: 'background 0.2s',
                                    '&[aria-selected="true"]': {
                                        background: 'linear-gradient(90deg, #00fff722 0%, #1976d2 10%)',
                                        color: '#00fff7',
                                    },
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #00fff744 0%, #1976d2 100%)',
                                        color: '#00fff7',
                                    },
                                },
                            }}
                            onChange={(_event, newValue: any) => {
                                setName(newValue)
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search and select any Anime"
                                    variant="filled"
                                    fullWidth
                                    InputLabelProps={{
                                        style: {
                                            color: '#1781D5',
                                            fontWeight: 700,
                                            fontFamily: 'Montserrat, Inter, Arial, sans-serif',
                                            fontSize: '1.08rem',
                                            letterSpacing: 1,
                                        },
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        style: {
                                            color: '#222',
                                            fontWeight: 600,
                                            fontFamily: 'Montserrat, Inter, Arial, sans-serif',
                                            fontSize: '1.15rem',
                                            borderRadius: 999,
                                            background: '#fff',
                                            boxShadow: '0 2px 12px 0 rgba(0,255,247,0.08)',
                                            paddingLeft: 10,
                                        },
                                        disableUnderline: true,
                                    }}
                                />
                            )}
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                            justifyContent: { lg: 'space-between', sm: 'center', xs: 'center' },
                            alignItems: 'center',
                        width: '100%',
                            flexWrap: "wrap",
                            gap: '1rem'
                    }}>
                            {cardData?.map((item:any, idx:number) => {
                                const url = `/aniverse/id?id=${item?.mal_id}`
                            return (
                                    <Card
                                        className="fade-in-up"
                                        style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
                                        sx={{ minWidth: 275, maxWidth: 275, maxHeight: 400, padding: '0.5rem' }}
                                        key={item?.rank}
                                    >
                                        <Link to={url}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="240"
                                                    image={item?.images?.jpg?.image_url}
                                                    sx={{
                                                        objectFit: 'contain'
                                                    }}
                                                    alt="green iguana"
                                                />
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-evenly',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                    gap: '0.5rem',
                                                    textAlign: 'center',
                                                }}>
                                                    <Typography gutterBottom variant="body1" >
                                                        {item?.title}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                        {item?.genres?.map((g:any, index:any) => (
                                                            <Chip key={index} size="small" label={g.name} color='info' />
                                                        ))}
                                                    </Box>
                                                    <Rating name="read-only" value={item?.score} precision={0.5} readOnly max={10} />
                                                </CardContent>
                                            </CardActionArea>
                                        </Link>
                                    </Card>
                                )
                        })}
                    <Box className="modern-pagination" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Pagination count={pageCount} page={page} onChange={handleChange} size="small" />
                    </Box>
                    </Box>
                </>
            ) : (
                <Loader />
            )}

        </Container>
    )
}

export default CardSection