import { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { ApiService } from "../services/ApiService";
import NewPost from "./NewPost";
import Post from "./Post";

const Timeline = ({type, user, showNewPost}) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (type === 'home') {
            ApiService.fetchHomePosts()
            .then((res) => {
            if (res.data) setPosts(res.data);
            }).catch((err) => setError(err))
            .finally(() => setLoading(false));    
        } else if (type === 'user_profile'){
            ApiService.fetchUserPosts(user)
            .then((res) => {
                if (res.data) setPosts(res.data);
            }).catch(err => setError(err))
            .finally(() => setLoading(false))    
        }
    }, []);