import { useEffect, useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams, Redirect } from 'react-router';
import Post from '../components/Post';
import AccountListModal from '../components/AccountListModal';
import { ApiService } from '../services/ApiService';
