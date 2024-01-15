import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../CategoriesBar/CategoriesBar'
import Video from '../../Video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../../Redux/Actions/videoAction'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { videos } = useSelector(state => state.video)
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    videos.map((video) =>
                        <Col lg={3} md={4}>
                            <Video video={video} key={video.id} />
                        </Col>)
                }
            </Row>
        </Container>
    )
}

export default HomeScreen
