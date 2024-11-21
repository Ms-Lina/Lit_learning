// src/components/Courses.js
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiX, FiClock, FiBook } from 'react-icons/fi';
import Footer from './Footer';
import Navbar from './Navbar';

const Courses = () => {
  // Extended course data
  const allCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript",
      duration: "8 weeks",
      level: "Beginner",
      category: "Web Development",
      topics: ["HTML", "CSS", "JavaScript"],
      instructor: "John Doe",
      enrolled: 1234,
      rating: 4.5,
      thumbnail: "/api/placeholder/400/250"
    },
    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React.js and build modern web applications",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Frontend",
      topics: ["React", "Redux", "Hooks"],
      instructor: "Jane Smith",
      enrolled: 956,
      rating: 4.8,
      thumbnail: "/api/placeholder/400/250"
    },    {
        id: 2,
        title: "Advanced React Development",
        description: "Master React.js and build modern web applications",
        duration: "10 weeks",
        level: "Intermediate",
        category: "Frontend",
        topics: ["React", "Redux", "Hooks"],
        instructor: "Jane Smith",
        enrolled: 956,
        rating: 4.8,
        thumbnail: "/api/placeholder/400/250"
      },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Create cross-platform mobile apps with React Native",
      duration: "12 weeks",
      level: "Advanced",
      category: "Mobile",
      topics: ["React Native", "iOS", "Android"],
      instructor: "Mike Johnson",
      enrolled: 789,
      rating: 4.6,
      thumbnail: "/api/placeholder/400/250"
    }
  ];

  // State management
  const [courses, setCourses] = useState(allCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    level: 'all',
    category: 'all',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const coursesPerPage = 6;

  // Filter and search logic
  useEffect(() => {
    let filtered = allCourses;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Level filter
    if (filters.level !== 'all') {
      filtered = filtered.filter(course => course.level === filters.level);
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(course => course.category === filters.category);
    }

    setCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, filters]);

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const CourseModal = ({ course, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-lg"
          /> */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <FiClock className="mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <FiBook className="mr-2" />
              <span>{course.level}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Topics Covered:</h3>
            <div className="flex flex-wrap gap-2">
              {course.topics.map((topic, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-600">{course.enrolled} students enrolled</p>
            </div>
            <button
              className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg transition-colors"
              onClick={() => {/* Add enrollment logic */}}
            >
              Start Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <Navbar/>
            <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Our Courses</h1>
          
          {/* Search and Filter Section */}
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              <FiFilter />
              Filters
            </button>
          </div>
        </div>

        {/* Filter Menu */}
        {isFilterMenuOpen && (
          <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters({...filters, level: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Categories</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Mobile">Mobile</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              {/* <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FiClock className="text-gray-400" />
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <span className="text-sm bg-primary text-white px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === i + 1 ? 'bg-primary text-white' : 'hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* Course Details Modal */}
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Courses;