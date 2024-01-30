import mongoose from 'mongoose';
import { connectDB } from '../mongodb/mongoose';
import User from '../models/User';
import { EmailAddressJSON } from '@clerk/nextjs/server';

interface infoUser {
    id: String;
    first_name: String;
    last_name: String;
    email_addresses: EmailAddressJSON[];
    image_url: String;
}

export const createOrUpdateUser = async (props: infoUser) => {
    try {
        await connectDB();

        const user = await User.findOneAndUpdate(
            { clerkId: props.id },
            {
                $set: {
                    firstName: props.first_name,
                    lastName: props.last_name,
                    photoProfile: props.image_url,
                    email: props.email_addresses[0].email_address,
                },
            },
            {
                upsert: true,
                new: true,
            }
        );

        await user.save();

        return user;
    } catch (error) {
        console.log(error);
    }
};
