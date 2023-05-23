using AutoMapper;
using Backend.Database.Models.User;
using Backend.Dtos.User;

namespace Backend.AutoMapper
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, PublicUser>();
            CreateMap<PublicUser, User>();
        }
    }
}
