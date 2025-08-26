import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daughter of Virginia Client",
      text: "May-Dann Group gave our family peace of mind. The caregiver was compassionate and professional.",
      image: "/img/e6904b10-fecb-4073-8809-2a5a738f052e.jpg"
    },
    {
      name: "Robert Chen",
      role: "Alabama Family",
      text: "BrightSouls has been a blessing. They honor my father's independence while keeping him safe.",
      image: "/img/e6904b10-fecb-4073-8809-2a5a738f052e.jpg"
    },
    {
      name: "Maria Rodriguez",
      role: "Healthcare Coordinator",
      text: "Their consistency and accountability make them our trusted partner in community care.",
      image: "/img/e6904b10-fecb-4073-8809-2a5a738f052e.jpg"
    }
  ];

  const values = [
    {
      icon: "Heart",
      title: "Compassion First",
      description: "Every interaction begins with empathy and dignity",
      color: "text-brand-orange-dark"
    },
    {
      icon: "Star",
      title: "Excellence in Care",
      description: "We uphold the highest standards of quality and safety",
      color: "text-brand-purple"
    },
    {
      icon: "Users",
      title: "Community Commitment",
      description: "Creating jobs, strengthening families, and giving back locally",
      color: "text-brand-blue"
    },
    {
      icon: "Shield",
      title: "Integrity & Trust",
      description: "Built on transparency and reliability",
      color: "text-brand-orange"
    },
    {
      icon: "TrendingUp",
      title: "Growth with Purpose",
      description: "Every acquisition strengthens our mission of care",
      color: "text-brand-orange-dark"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-brand-blue">
              MAY-DANN GROUP
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-brand-orange-dark transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-brand-orange-dark transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-brand-orange-dark transition-colors">Portfolio</a>
              <a href="#values" className="text-gray-700 hover:text-brand-orange-dark transition-colors">Values</a>
            </div>
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width Banner */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        {/* Full-width banner photo */}
        <div className="relative h-screen max-h-[800px] min-h-[600px]">
          <img 
            src="/img/e2810b90-318a-478c-a223-22c9e7678498.jpg" 
            alt="Smiling caregiver with client in a home setting" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  May-Dann Group – <span className="text-brand-orange">Compassionate Care</span>, Rooted in Community
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Delivering home care with <strong>dignity</strong>, <strong>integrity</strong>, and <strong>purpose</strong> since 2020.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 text-lg">
                    Learn More About Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/e6904b10-fecb-4073-8809-2a5a738f052e.jpg" 
                alt="Community care" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="text-brand-blue">Community</span>-Driven. <span className="text-brand-orange-dark">Mission</span>-Focused.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                May-Dann Group Inc., founded in 2020, is a community-driven healthcare company dedicated to delivering compassionate and reliable home care. We empower people to live with <strong className="text-brand-orange-dark">dignity</strong> and <strong className="text-brand-orange-dark">independence</strong> while giving families <strong className="text-brand-orange-dark">peace of mind</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our leadership brings decades of operational, financial, and caregiving <strong className="text-brand-purple">expertise</strong>, guiding every agency toward <strong className="text-brand-purple">excellence</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Care That <span className="text-brand-blue">Honors Legacy</span> & <span className="text-brand-orange-dark">Builds the Future</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Through our flagship brand BrightSouls, we provide non-medical home care services: personal care, companionship, and daily living support. Our goal is to keep seniors and individuals with special needs safe, supported, and engaged in their own homes.
            </p>
          </div>

          {/* Infographic Flow */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-brand-orange rounded-full flex items-center justify-center">
                  <Icon name="Building2" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Local Agency</h3>
                <p className="text-gray-600">Strong community trust and deep local roots</p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <Icon name="ArrowRight" className="h-8 w-8 text-brand-orange-dark" />
            </div>

            <Card className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-brand-purple rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">BrightSouls Integration</h3>
                <p className="text-gray-600">Resources, stability, and leadership support</p>
              </CardContent>
            </Card>

            <div className="md:col-span-3 flex justify-center mt-8">
              <Card className="text-center p-8 bg-gradient-to-r from-brand-orange to-brand-purple text-white shadow-xl max-w-md">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                    <Icon name="Users" className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">Stronger Care + Community Support</h3>
                  <p className="opacity-90">Legacy preservation, caregiver retention, stronger ties</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              BrightSouls – United in Care, Rooted in Community
            </h2>
          </div>

          {/* US Map with highlighted states */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <img 
                  src="/img/ea9fe4fd-539a-4e39-9750-e9f0f8547af9.jpg" 
                  alt="US Map with Virginia and Alabama highlighted" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-brand-orange rounded-full"></div>
                    <span className="font-semibold text-gray-800">Virginia</span>
                    <span className="text-gray-600">- Since 2021</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-brand-orange-dark rounded-full"></div>
                    <span className="font-semibold text-gray-800">Alabama</span>
                    <span className="text-gray-600">- Since 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Virginia */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-brand-orange">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">BrightSouls Virginia</h3>
                    <div className="w-12 h-1 bg-brand-orange rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Formerly Cleansing Water Inc.</strong> - Acquired 2021
                </p>
                <p className="text-gray-600">
                  Serving families across Virginia with compassionate home care services and deep community connections.
                </p>
                <div className="flex items-center text-brand-orange font-semibold">
                  <Icon name="Users" className="h-5 w-5 mr-2" />
                  Serving Virginia Families Since 2021
                </div>
              </CardContent>
            </Card>

            {/* Alabama */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-brand-orange-dark">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-orange-dark rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">BrightSouls Alabama</h3>
                    <div className="w-12 h-1 bg-brand-orange-dark rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Formerly Elder Care of North Alabama</strong> - Acquired 2023
                </p>
                <p className="text-gray-600">
                  Continuing a long-standing tradition of in-home care with trusted community partnerships.
                </p>
                <div className="flex items-center text-brand-orange-dark font-semibold">
                  <Icon name="Users" className="h-5 w-5 mr-2" />
                  Continuing Alabama Legacy Since 2023
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Customers */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-brand-orange-dark">Families</span> We Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We care for seniors, individuals with disabilities, and families who need a trusted partner in care.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center">
                      <Icon name="Quote" className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Guided by Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${value.color === 'text-brand-orange-dark' ? 'bg-brand-orange-dark' : value.color === 'text-brand-purple' ? 'bg-brand-purple' : value.color === 'text-brand-blue' ? 'bg-brand-blue' : 'bg-brand-orange'}`}>
                    <Icon name={value.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold ${value.color}`}>{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA with Visual */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/img/af1270cd-7627-4f43-a93c-6f17b6d45bcb.jpg" 
            alt="Smiling caregiver and client hand-in-hand, reinforcing trust" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/90 to-brand-purple/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              May-Dann Group – <span className="text-brand-cream">Here for You</span>, Here for Your Family
            </h2>
            <p className="text-xl text-white/95 leading-relaxed">
              Compassionate care, <span className="text-brand-cream font-semibold">trusted caregivers</span>, and a promise to <span className="text-brand-cream font-semibold">honor every legacy</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-brand-cream text-brand-orange hover:bg-white px-8 py-4 font-semibold text-lg">
                Find Care Near You
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange px-8 py-4 font-semibold text-lg">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">May-Dann Group</h3>
              <p className="text-brand-purple-light">Compassionate Care, Rooted in Community</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-brand-purple-light">
                <li>Personal Care</li>
                <li>Companionship</li>
                <li>Daily Living Support</li>
                <li>Community Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-brand-purple-light">
                <li>Virginia</li>
                <li>Alabama</li>
                <li>Expanding Soon</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-brand-purple-light">
                <li>info@maydanngroup.com</li>
                <li>(555) 123-4567</li>
                <li>Emergency 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-purple-light mt-8 pt-8 text-center text-brand-purple-light">
            <p>&copy; 2024 May-Dann Group. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}