import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { Loading } from './Loading';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3 className='fw-bold fs-1 text-capitalize text-center my-4 py-2'>✔️ {category}</h3>

            <div className='d-flex flex-wrap gap-4 justify-content-center align-items-center'>
                {
                    isLoading
                        ? <Loading />
                        : images.map((image, indice) => (
                            <GifItem key={image.id} {...image} indice={indice + 1} category={category} />
                        ))
                }
            </div>
        </>
    )
}
