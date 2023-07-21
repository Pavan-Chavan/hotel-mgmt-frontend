import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadJobPosts();
  }, []);

  const loadJobPosts = async () => {
    const result = await axios.get("http://localhost:8081/jobPosts");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/jobPost/${id}`);
    loadJobPosts();
  };

  return (
    <div className="container">hello
    </div>
  );
}
