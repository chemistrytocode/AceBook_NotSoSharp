﻿using System;

namespace AcebookAPI.Models
{
    public class Post
    {
        public long Id { get; set; }
        public string User { get; set; }
        public string Message { get; set; }
        public DateTime Posted_At { get; set; }
    }
}
