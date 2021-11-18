using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Hubs
{
    public class ChatHub :Hub
    {
        //send message (Ahmad,Hi there)
        public async Task SendMessage(string fromUser, string Messgae)
        {
            //send for all users
            await Clients.All.SendAsync("RecieveMessage", fromUser, Messgae);
        } 
    }
}
