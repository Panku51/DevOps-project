import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import AccountCard from "../components/AccountCard";
import Navigation from "../components/Navigation";
import { ApiService } from "../services/ApiService";

        <Container fluid="xl">
            <Row>
                <Col md={3} className="aside d-none d-md-block">
                    <Card>
                        <Navigation/>
                    </Card>
                </Col>
                <Col md={9} className="main accounts-list">
                    <Card className="p-3">
                        <a href={`/${username}`}>Regresar</a>
                        <h3>{username.startsWith('@') ? username : `@${username}`}</h3>
                        <h4>{mode === 'following' ? 'Siguiendo' : 'Seguidores'}</h4>
                        <hr />
                        {error && <Alert show variant="danger">{error}</Alert>}
                        {loading && 
                            <div className="text-center p-3">
                                <Spinner animation="border" variant="primary"/>
                            </div>
                        }
                        {accounts && accounts.map((el) => <AccountCard key={el.profile_id} account={el}/>)}
                        {accounts && accounts.length === 0 && <p>{(mode === 'followers') 
                            ? 'No hay seguidores.'
                            : 'Este usuario no sigue a ninguna cuenta.'}</p>}
                    </Card>
                </Col>
            </Row>
        </Container>

export default AccountsListPage;