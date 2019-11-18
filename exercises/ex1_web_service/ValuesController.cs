using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace RestfulApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values/GetWords
        // Ex 1
        [HttpGet("CamelCaseConvertor")]
        public string CamelCaseConvertor(string sentence)
        {
            if (sentence == null) return "Empty sentence, try again.";
            TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;
            string newSentence = null;
            sentence = textInfo.ToTitleCase(sentence.ToLower());
            string[] words = sentence.Split(' ');
            foreach (var word in words)
            {
                    newSentence += word;
            }
            return newSentence; 

        }
        // GET api/values/GetOddIndex
        // Ex 4
        [HttpGet("GetOddIndex")]
        public string OddIndex(string sentence)
        {
            if (sentence == null) return "Empty sentence, try again.";
            string newSentence=null;
            string[] words = sentence.Split(' ');
            int i = 0;
            foreach (var word in words)
            {
                if (i % 2 != 0)
                    newSentence += word+' ';
                i++;
            }
            return newSentence;
        }

        // GET api/values/DeleteFirstAndLast
        // Ex 12
        [HttpGet("DeleteFirstAndLast")]
        public string DeleteFirstAndLast(string sentence)
        {
            if (sentence == null) return "Empty sentence, try again.";
            sentence = sentence.Remove(0,1);
            sentence = sentence.Remove(sentence.Length - 1);
            return sentence;
        }

        // GET api/values/MaxNumber
        // Ex 15
        [HttpGet("MaxNumber")]
        public int MaxNumber(int n1,int n2,int n3)
        {
            n1=Math.Max(n1, n2);
            return Math.Max(n1, n3);
        }

        // GET api/values/MinNumber
        // Ex 16
        [HttpGet("MinNumber")]
        public int MinNumber(int n1, int n2, int n3,int n4)
        {
            n1 = Math.Min(n1, n2);
            n1=Math.Min(n1, n3);
            return Math.Min(n1, n4);
        }
    }
}
