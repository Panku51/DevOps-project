import { useState } from 'react';
import { Button, Card, DropdownButton, Dropdown, Image, Modal } from 'react-bootstrap';
import { useAuthState } from '../context/context';
import { ApiService } from '../services/ApiService';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import NewReply from './NewReply';

const API_URL = process.env.REACT_APP_API_URL;
