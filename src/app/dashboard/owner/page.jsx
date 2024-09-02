import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  // This would typically come from your application's state or API
  const appointmentData = {
    ownerInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "+1 (555) 123-4567",
      picture: "/placeholder.svg?height=200&width=200",
    },
    petInfo: {
      name: "Buddy",
      breed: "Labrador Retriever",
      species: "Dog",
      age: 5,
      picture: "/placeholder.svg?height=200&width=200",
    },
    services: ["Pet Sitting", "Grooming"],
    allergies: "None known",
    emergencyContact: {
      name: "Jane Doe",
      contact: "+1 (555) 987-6543",
    },
    additionalConcerns: "Buddy gets anxious around loud noises.",
    reasonForVisit: "Annual check-up and grooming",
    medicalHistory: "Up to date on vaccinations, no major health issues.",
  };

  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Your Appointment Dashboard
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Owner Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={appointmentData.ownerInfo.picture}
                  alt={`${appointmentData.ownerInfo.firstName} ${appointmentData.ownerInfo.lastName}`}
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p>{`${appointmentData.ownerInfo.firstName} ${appointmentData.ownerInfo.lastName}`}</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>{appointmentData.ownerInfo.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Phone Number:</p>
                  <p>{appointmentData.ownerInfo.phoneNumber}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pet Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={appointmentData.petInfo.picture}
                  alt={appointmentData.petInfo.name}
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p>{appointmentData.petInfo.name}</p>
                </div>
                <div>
                  <p className="font-semibold">Breed:</p>
                  <p>{appointmentData.petInfo.breed}</p>
                </div>
                <div>
                  <p className="font-semibold">Species:</p>
                  <p>{appointmentData.petInfo.species}</p>
                </div>
                <div>
                  <p className="font-semibold">Age:</p>
                  <p>{appointmentData.petInfo.age} years</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Services Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {appointmentData.services.map((service, index) => (
                <Badge key={index} variant="secondary">
                  {service}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Allergies:</p>
                <p>{appointmentData.allergies}</p>
              </div>
              <div>
                <p className="font-semibold">Medical History:</p>
                <p>{appointmentData.medicalHistory}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Name:</p>
                <p>{appointmentData.emergencyContact.name}</p>
              </div>
              <div>
                <p className="font-semibold">Contact:</p>
                <p>{appointmentData.emergencyContact.contact}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Reason for Visit:</p>
                <p>{appointmentData.reasonForVisit}</p>
              </div>
              <div>
                <p className="font-semibold">Additional Concerns:</p>
                <p>{appointmentData.additionalConcerns}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
