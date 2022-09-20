import React from 'react';
import { RiFileList3Line} from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar=()=> {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><RiFileList3Line/><strong>CompList</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><strong>Home</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Listings</strong></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>Companies</strong>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Name</a></li>
            <li><a class="dropdown-item" href="#">ContactInfo</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Location</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"><strong>Information</strong></a>
        </li>
      </ul>
      <AiOutlineSearch size="35"/>
      <form class="d-flex" role="search">
        
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
export default Navbar;