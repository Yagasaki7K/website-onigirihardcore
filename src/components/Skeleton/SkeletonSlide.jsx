import { Skeleton } from '@mui/material'
import SlideDetails from '../SlideDetails'

export const SkeletonSlide = () => {
    return (
        <SlideDetails>
            <Skeleton
                className="keen-slider-skeleton"
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
            />
        </SlideDetails>
    )
}