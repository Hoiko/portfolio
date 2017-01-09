<?php

namespace PortfolioBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render('PortfolioBundle:Default:index.html.twig');
    }
    /**
     * @Route("/mail")
     */
    public function mailAction(Request $request){
    	$message = \Swift_Message::newInstance()
		->setSubject('pro')
		->setFrom($request->request->get('email'))
		->setTo('hugo.rodriguez.75000@gmail.com')
		->setBody(
			$this->renderView('PortfolioBundle:email:email.html.twig', array('message' => $request->request->get('message')), 'text/html'));
        $this->get('mailer')->send($message);
        return $this->render('PortfolioBundle:Default:index.html.twig');
    }
}
