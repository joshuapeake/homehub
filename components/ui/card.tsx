import React from 'react';

export const CardHeader: React.FC = ({ children }) => <div className="card-header">{children}</div>;

export const CardTitle: React.FC = ({ children }) => <h2 className="card-title">{children}</h2>;

export const CardDescription: React.FC = ({ children }) => <p className="card-description">{children}</p>;

export const CardContent: React.FC = ({ children }) => <div className="card-content">{children}</div>;

export const CardFooter: React.FC = ({ children }) => <div className="card-footer">{children}</div>;