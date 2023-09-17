import getAllPictures from '@/lib/getAllPictures'
import PictureGrid from './components/PictureGrid'

export const metadata = {
    title: 'Gallery: Dan\'s Blog',
    description:'I like to take pictures.'
  }

export default async function Gallery() {
    const picData = await getAllPictures()
    const pics = await picData.data
    const picCount = await pics.length
    return (
        <>
            <PictureGrid pics={pics} count={picCount}/>
        </>
    )
}